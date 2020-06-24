import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import Footer from '../footer/index';
import Header from '../header/index';


const Wrapper =(props)=>{
    return(<div>
            <Helmet>
                    <html lang={'en'}/>
                    <title>{props.title}</title>
                    <link rel="canonical" href={props.url}/>
                    <meta property="og:title" content={props.title}/>
                    <meta name='description' content={`Description`}/>
                    {/* <meta property="og:description" content={this.props.content ? this.props.content.substring(0, 200):`create your countdown at: ${process.env.WEBSITE}`}/>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={this.props.url} />
                    <meta property="og:image" content={this.props.image || `https://cdn.arewethere.yt/img/arewethere-twitter-card.png`} />
                      <meta name="twitter:image:src" content={this.props.image ? this.props.image :`${process.env.CDN_URL}img/AWTYtwitterCardLarge.jpg` } /> */}
                </Helmet>
        <Header/>
        {props.children}
        <Footer/>
    </div>)

}
Wrapper.propTypes = {
    locale: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  };
  
  Wrapper.defaultProps = {
    locale: 'en',
    title: `title`,
    content: `app description` ,
    url: 'https://www.arewethere.yt',
    image: `https://cdn.arewethere.yt/img/arewethere-twitter-card.png`,
  };
export  default Wrapper;