import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


class Nav extends Component{
    render(){
        console.log(this.props)
        const { user_image, username } = this.props
        // const userName = this.props.username
        // const Image =  this.props.user_image
        return(
            <div>
                Nav
                <div className='username' >
                    {username}
                </div>
                <div className='user-image' >
                  <img src={user_image} alt="Cool img"/>  
                </div>
                
                <Link to='/dashboard' ><button>Home</button></Link>
                <Link to='/post/:postid' ><button>New Post</button></Link>
                <Link to='/' ><button>Logout</button></Link>
            </div>
        )
        }
       
    }

function mapStateToProps(reduxState){
    console.log(reduxState)
    const {username, user_image} = reduxState
    return{username, user_image}
}
//props, action builders
export default connect(mapStateToProps,{})(Nav)