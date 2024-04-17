import React from "react"

interface ButtonProps {
    children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <button className="bg-orange-600 p-2 rounded-md hover:bg-orange-900">{children}</button>
    )
}