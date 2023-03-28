import Button from "./Button"
import Input from "./input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseMaker, chooseFlavor, chooseYear, chooseRating } from "../redux/slices/RootSlice";


interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.make } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      
      dispatch(chooseMaker(data.maker));
      dispatch(chooseFlavor(data.flavor));
      dispatch(chooseYear(data.year));
      dispatch(chooseRating(data.rating));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="maker">Maker / Brand</label>
          <Input {...register('maker')} name='maker' placeholder="Maker"/>
        </div>
        <div>
          <label htmlFor="flavor">Flavor / Profile</label>
          <Input {...register('flavor')} name='flavor' placeholder="Flavor"/>
        </div>
        <div>
          <label htmlFor="year">Year made</label>
          <Input {...register('year')} name='year' placeholder="Year"/>
        </div>
        <div>
          <label htmlFor="rating">Rating 1-10</label>
          <Input {...register('rating')} name='rating' placeholder="Rating"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-black p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
