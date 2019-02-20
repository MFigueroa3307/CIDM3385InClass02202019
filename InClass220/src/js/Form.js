const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"}, 
        [
            React.createElement('label', 
                                {
                                    htmlFor: "InputEmail"
                                }, 
                                "Email address"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "email",
                                    id: "InputEmail",
                                    placeholder: "Enter email"
                                },
            ),
            React.createElement('label', 
                                {
                                    htmlFor: "Password"
                                }, 
                                "Password"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "Password",
                                    id: "InputPassword",
                                    placeholder: "Enter Password"
                                },
            ),
            React.createElement('input', 
            {
                className: "button",
                type: "Button",
                id: "SubmitButton"
                
            },
),
            
        ]
        
    );
};