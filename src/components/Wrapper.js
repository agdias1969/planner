import React, { Component } from 'react'
import Right from './Right'
import Left from './Left'

class Wrapper extends Component {
    render() {
        return (
            <div class='wraper'>
             <Left />
             <Right />
            </div>
              
            
        )
    }
}

export default Wrapper;