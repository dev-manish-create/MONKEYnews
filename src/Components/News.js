import React, { Component } from 'react';
import NewItems from './NewItems';
import Spinner from './Spinner.js';
export default class News extends Component {
    static defaultProps ={
        category : "technology",
        pagesize : "5"

    }

   

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizestring(this.props.category)}- MONKEYnews app`;
    }

    capitalizestring = (string)=>{
         return string.charAt(0).toUpperCase() + string.slice(1);
    }

    updatenews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);

        this.setState({
            articles: parseddata.articles,
            totalResults : parseddata.totalResults,
            loading : false

        })

       
    }
    async componentDidMount() {
        this.setState({
            loading : true
        })
        this.updatenews();

    }

    handlenextclick = () => {
       
       
        this.setState({
            page: this.state.page + 1,
            loading : true
        })

        this.updatenews();
     
    
    }


    handlepreviousclick = () => {

        this.setState({
            page: this.state.page - 1,
            loading : true

        })
        this.updatenews();
       

    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className = "text-center ">Monkeynews - Top Headlines on {this.capitalizestring(this.props.category)} </h2>
              {this.state.loading && <Spinner/>}
                <div className="row">
                    { !this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewItems title={element.title} discription={element.discription} imageUrl={!element.urlToImage ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s" : element.urlToImage} newsUrl={element.url}  author = {element.author}  date = {element.publishedAt} source={element.source.name}/>
                        </div>
                    })}



                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/5)}type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next&rarr;</button>
                </div>
            </div >


        )
    }
}
