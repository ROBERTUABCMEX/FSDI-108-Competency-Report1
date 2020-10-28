import React, {Component} from "react";
import Product from "../product/product";
import ProductService from './../services/productService';

class Catalog extends Component {
      state = {
        products: [],
        categories:[],
        selectedCategory: ""
    };
    render(){
        return(
            <div className="catalog-page">
            <nav className="categories nav nav-pills nav-fill">
            <a onClick={() => this.selectCategory("all")} key="all" className="nav-link" href="#">All Products</a>                
                {this.state.categories.map((cat) => <a 
                onClick={() => this.selectCategory(cat)} 
                key={cat} 
                className="nav-link" href="#"
                >
                    {cat}</a>)}
            </nav>

            <div className="productsContainer">
                {prodsToDisplay.map((p) => <Product data={p} key={p.id}></Product>)}
            </div>
        </div>  
        );
    }



    selectCategory = (category) =>{
        //console.log(category);
        if(category==="all"){
            category="";
        }

        this.setState({selectedCategory: category});
        console.log(category);
    }

    componentDidMount(){
        //console.log("Load data here");
        let service = new ProductsServices();
        const data = service.getProducts();

        this.setState({products: data});
        //console.log(service.getProducts());

        //console.log(data);
        //Identify the unique categories

        let category = [];

        //travel the array(for loop)
        for(var x=0; x<data.length; x++){

            let product = data[x];
            //get each ittem in the array
            // ask if category does not contain the item.category push it
            
            if(!category.includes(product.category) ){
            //if(category.indexOf(product.category) < 0){
            //if(category.indexOf(product.category) === -1){
                    category.push(product.category);
            }

        }

        category.sort();  

        this.setState({categories: category});
        //console.log(category);

    }

}
 
export default Catalog;