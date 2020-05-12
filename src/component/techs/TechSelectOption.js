import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../reducers/action/techAction'

const TechSelectOption = ({ getTechs, tech: { loading, techs } }) => {
    useEffect(() => {
        getTechs()
        // eslint-disable-next-line 
    }, [])

    return (
        <Fragment>
            <option>None</option>
            {(!loading && techs !== null) &&
                techs.map(tech => (<option key={tech.id} value={tech.firstName + " " + tech.lastName}>
                    {tech.firstName + " " + tech.lastName}
                </option>
                ))
            }
        </Fragment>
    )
}

TechSelectOption.propTypes = {

}
const mapStateToProps = (state) => ({
    tech: state.tech,

})
export default connect(mapStateToProps, { getTechs })(TechSelectOption)
