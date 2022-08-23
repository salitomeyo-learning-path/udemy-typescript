(() => {
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Salome',
        age: 22,
        address: {
            id: 124,
            zip: 'JD2 DAS',
            city: 'Otawa'
        },
        getFullAddress( id: string) {
            return this.address.city;
        }
    }
})()