import {link} from 'react';

class Home extends Component {
    state={};
    render() {
       return(
           <div className="jumbotron">
              <h1 className="display-4">Welcome to organika</h1>
              <p className="lead">
                  Here you will find the best, fresher and fanciaer
              </p>
              <hr className="my-4"></hr>
              <p>
                  It uses utility classes for typography to space
              </p>
              <a className="btn btn-primary btn-lg" href="/#" role="button">
                  Learn more
              </a>
           </div>

       );
    }
               
}


export default Home;
