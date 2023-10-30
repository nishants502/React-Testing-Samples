import { act, logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./skills";
import userEvent from "@testing-library/user-event";

describe('Skills',()=>{
    const skills=['HTML','CSS','JavaScript'];
    userEvent.setup();
    test('renders correctly',()=>{
        render(<Skills skills={skills}/>);
        const listElement= screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('redners a list of skills',()=>{
        render(<Skills skills={skills}/>);
        const listItemElements= screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length)
    })


    test('renders login button',()=>{
        render(<Skills skills={skills}/>);
        const loginButton=screen.getByRole('button');
        expect(loginButton).toBeInTheDocument()
    })

    
    test('start learning button is not rendered',()=>{ 
        render(<Skills skills={skills}/>);
        const startLearningButton=screen.queryByRole('button',{
            name: 'Start learning'
        });
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test('start learning button is eventually displayed',async ()=>{ 
        const view=render(<Skills skills={skills}/>);
        logRoles(view.container)
        // screen.debug();
        const startLearningButton=await screen.findByRole('button',{
            name: 'Start learning'
        },
        {
            timeout:2000
        });
        // screen.debug();
        expect(startLearningButton).toBeInTheDocument();
    })

    test('login button handler called',async()=>{
        const loginHandler=jest.fn();
        
        const { container } = render(<Skills skills={skills} />);
        // Skills.prototype.handleLogin=loginHandler;
        const loginButton=screen.getByRole('button',{name:'Login'});
        // render(<Skills skills={skills}/>);
        const buttonElement = container.querySelector('.login-button');
        buttonElement?.addEventListener('click', loginHandler);
        await userEvent.click(loginButton);
        expect(loginHandler).toHaveBeenCalledTimes(1);
    })
})