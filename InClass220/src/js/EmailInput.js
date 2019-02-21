class EmailInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_email: ''}; 

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);


    }

    handleEmailChange(event){
        const delivery_email = event.target.value;
        this.setState( () => {
                return {
                    delivery_email
                }
            }
        );

        const zip = this.state.delivery_email;
        
    }

    handleEmailSubmit(event){

        this.props.handleOrderSubmit(this.state.delivery_email);
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="emailInput" 
                       onChange={this.handleEmailChange}                       
                       placeholder="Your email adress" 
                       type="input"
                       value={this.state.delivery_email}  />
                       <div className="input-group-append">
                            <button className="btn btn-primary" 
                                id="button-addon2"
                                onClick={this.handleEmailSubmit}>
                            Submit
                            </button>
                        </div>
                    </div>
            
                );
        
            };
}
