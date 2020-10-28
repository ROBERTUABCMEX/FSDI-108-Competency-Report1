import React, {Componet} from "react";

class About extends Component {
    state={
        emailVisible:false
    }
}
render(){
    return (
        <div className="jumbotron">
           <h1 className="display-4">Roberto Valdes</h1>
           <p>
               Please send an email and we can chat about any project you have in mind
           </p>

           { this.getEmailText()}

           <button onClick={this.onButtonClicked}
           className="btn btn-primary btn-log">
           {this.state.emailVisible? "Hide email" : "show email"}
           </button>
        </div>
  );
}

getEmailText = () => {
    if (this.state.emailVisible){
        return <a href="mailto:contact@mail.com">contact@mail.com</a>";
    }
    return "Click the button to see my email";
};

onButtonClicked =() =>{
     this.setState({emailVisible: !this.state.emailVisible });
   };
}

export default About;  