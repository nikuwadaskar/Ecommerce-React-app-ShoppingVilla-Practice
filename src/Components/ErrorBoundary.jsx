import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }


    render() {
        return (
            this.state.error ?
                <div>
                    Error Boundary is working
                </div> :
                this.props.children
        )
    }
}
