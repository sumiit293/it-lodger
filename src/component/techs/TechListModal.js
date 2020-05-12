import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from './../../reducers/action/techAction'
import TechItem from './TechItem'
import propTypes from 'prop-types'
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {


    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, [])



    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {(!loading && techs !== null)
                        && techs.map(tech => (
                            <li key={tech.id} className="collection-item"><TechItem tech={tech} /></li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { getTechs })(TechListModal);