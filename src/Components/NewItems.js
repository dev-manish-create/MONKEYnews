import React, { Component } from 'react';

export default class NewItems extends Component {
    render() {
        let { title, desctiption, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className='my-3'>

                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left : '90%'}}>
                                {source}
                                
                            </span>
                        </h5>
                        <p className="card-text">{desctiption}</p>
                        <p className="card-text">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
