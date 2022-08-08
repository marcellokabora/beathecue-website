export interface Account {
    name: string
    email: string
    info: string
    photo: string
    paypal: string
    phone: string
    event: string
    coin: number
    transaction?: string
}

export interface Club {
    id: string
    name: string
    info: string
    city: string
    coords: string
    photo?: string
    color?: string
}
