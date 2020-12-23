import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Form from './Form'


test('render content', () => {
    const component = render(<Form />)
    expect(component.container).toHaveTextContent('Account Register')
})


describe('<Form />', () => {
    let component
    beforeEach(() => {
        global.alert = jest.fn()
        //Either use the global.alert instead of window.alert becasue node accepts global or use the code mentioned below.
        /*  jest.spyOn(window, 'alert').mockImplementation(() => {});*/
        component = render(<Form />)
    })

    test('all input field are render', () => {
        const form = component.container.querySelector('form')
        const nameField = component.container.querySelector('#name')
        const emailField = component.container.querySelector('#email')
        const availabilityField = component.container.querySelector('#availability')
        const flexiableField = component.container.querySelector('#flexiable')

        fireEvent.change(nameField, {
            target: { value: 'Samundra'}
        })
        fireEvent.change(emailField, {
            target: { value: 'xx@gmail.com'}
        })
        fireEvent.change(availabilityField, {
            target: { value: 123}
        })
        fireEvent.change(flexiableField, {
            target: { value: true}
        })
        fireEvent.submit(form)

        expect(nameField).toBeInTheDocument('Samundra')
        expect(emailField).toBeInTheDocument('xx@gmail.com')
        expect(availabilityField).toBeInTheDocument(123)
        expect(flexiableField).toBeInTheDocument(true)
    })

    test('availability must be a number', () => {
        const form = component.container.querySelector('form')
        const nameField = component.container.querySelector('#name')
        const AvaiField = component.container.querySelector('#availability')
        
        fireEvent.change(nameField, {
            target: { value: 'Samundra'}
        })
        
        fireEvent.change(AvaiField, {
            target: { value: 'abc'}
        })
        fireEvent.submit(form)
        const div = component.container.querySelector('#avai-error')
        expect(div).toHaveTextContent('Must be a number')
    })

    test('should input the valid email address.', () => {
        const form = component.container.querySelector('form')
        const nameField = component.container.querySelector('#name')
        const emailField = component.container.querySelector('#email')
        
        fireEvent.change(nameField, {
            target: { value: 'Samundra'}
        })
        
        fireEvent.change(emailField, {
            target: { value: 'abc'}
        })
        fireEvent.submit(form)
        const div = component.container.querySelector('#email-error')
        expect(div).toHaveTextContent('There must be @ with proper format of email.')
    })

    test('save the input data', () => {
        const form = component.container.querySelector('form')
        const nameField = component.container.querySelector('#name')
        const emailField = component.container.querySelector('#email')
        const availabilityField = component.container.querySelector('#availability')
        const flexiableField = component.container.querySelector('#flexiable')

        fireEvent.change(nameField, {
            target: { value: 'Samundra'}
        })
        fireEvent.change(emailField, {
            target: { value: 'xx@gmail.com'}
        })
        fireEvent.change(availabilityField, {
            target: { value: 123}
        })
        fireEvent.change(flexiableField, {
            target: { value: true}
        })
        fireEvent.submit(form)

        expect(window.alert).toBeCalledWith('Your data has been saved to our database..');
    })
})
