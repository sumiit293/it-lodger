import React, { useRef } from 'react'
import propType from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from './../../reducers/action/techAction'
const TechItem = ({ tech, deleteTech }) => {


    return (
        <div className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={() => { deleteTech(tech.id) }}>delete</i>
                </a>
            </div>
        </div>
    )
}

export default connect(null, { deleteTech })(TechItem)
TechItem.propType = {
    tech: propType.object.isRequired,
}