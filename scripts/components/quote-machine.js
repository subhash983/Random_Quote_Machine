import React from 'react';

class QuoteMachine extends React.Component {
    render() {
        return (
            <div className="container">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <p className="quoteText">Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.</p>
                <p className="author">- Albert Einstein</p>
                <div className="icons">
                    <a href="#" className="twitterLink button">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="tumblrLink button">
                        <i className="fa fa-tumblr" aria-hidden="true"></i>
                    </a>
                    <input type="button" className="button" id="btnNextQuote" name="btnNextQuote" value="Next Quote"/>
                </div>
            </div>
        );
    }
}
export default QuoteMachine;
