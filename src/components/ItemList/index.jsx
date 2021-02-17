import { Component } from 'react'
import './index.css'

export default class ItemList extends Component {
    render() {
        const { items, title, } = this.props
        const content = this.props.content
        const marginBottom = this.props.marginBottom || '12px'
        return (
            <div className="itemWrapper" style={{marginBottom}}>
                <div className="container">
                    <div className="title">{title}</div>
                    <div className="content">{content}</div>
                </div>
                <div className="items">
                    {
                        items ? items.map(item => {
                            return (
                                <div key={item.des} style={{ width: '90px', textAlign: 'center' }}>
                                    <img src={item.src.default} alt="" style={{ width: '44px', height: '44px', borderRaduis: '50%' }} />
                                    <div className="des">{item.des}</div>
                                </div>
                            )
                        }) : ''
                    }

                </div>
            </div>
        )
    }
}