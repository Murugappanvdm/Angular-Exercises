export interface contact {
title: string,
address : string,
city: string,
pin: number,
image: string
}

export interface service {
    id: number,
    title: string,
    description: string,
    image: string
}

export interface details
{
    id: number,
    title: string,
    description: string[]
}

export interface review {
    id:number,
    name:string,
    email:string,
    type:string,
    message: string
}