/* 
    *Greet should render the text hello and if a name is passed into the component
    * it should render hello followed by the name
 */


import { render, screen } from "@testing-library/react"
import { text } from "stream/consumers"
import { Greet } from "./greet";


describe('Greet',()=>{
    test('Renders correctly',()=>{
        render(<Greet name=''/>)
    const textElement=screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
    }) 
})


describe('Nested',()=>{
    test('Renders with a name',()=>{
        render(<Greet name='Nishant'/>)
        const textElement= screen.getByText('Hello Nishant')
        expect(textElement).toBeInTheDocument()
    })
})