let token = 'ec4750abd4f9b014a27ae5aa6de46a2b4f6b1d3dc8c0455d'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://whiskeyjunction.glitch.me/api/whiskeys`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://whiskeyjunction.glitch.me/api/whiskeys`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Failed to crate new data on the server')
        }

        return await response.json()
    },

    update: async(id:string, data: any = {}) => {
        const response = await fetch(`https://whiskeyjunction.glitch.me/api/whiskeys/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://whiskeyjunction.glitch.me/api/whiskeys/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}