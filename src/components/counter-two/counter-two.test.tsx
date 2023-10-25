import { render, screen } from '@testing-library/react';
import { CounterTwo } from './counter-two';
import userEvent from '@testing-library/user-event';

describe('Counter Two',()=>{
    userEvent.setup();
    it('renders correctly',()=>{
        render(<CounterTwo count={0}/>);
        const textElement= screen.getByText('Counter Two')
        expect(textElement).toBeInTheDocument();
    })

    it('handlers are called',async()=>{
        const incrementHandler= jest.fn()   //mock function
        const decrementHandler= jest.fn()   //mock function
        render(<CounterTwo 
            count={0}
            handleIncrement={incrementHandler} 
            handleDecrement={decrementHandler}
            />);

            const incrementButton= screen.getByRole('button',{name:'Increment'});
            const decrementButton= screen.getByRole('button',{name:'Decrement'});

            await userEvent.click(incrementButton);
            await userEvent.click(decrementButton);
            expect(incrementHandler).toHaveBeenCalledTimes(1);
            expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})