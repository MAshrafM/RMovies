import React from 'react';
import {Radio, Col} from 'react-bootstrap';

const DropdownSelect = ({buildProps, eventHandler, radioSelectValue}) => {
    return(
        <Col xs={4} className="text-center search__form__select-block">
            <Radio name="filter-group" value={buildProps.value} onChange={eventHandler} checked={buildProps.value === radioSelectValue}>
                <div className="borderbox-container">
                    <img src={buildProps.imageUrl} className="img-fluid mx-auto" alt={buildProps.altText} title={buildProps.altText} />
                    {buildProps.description}
                </div>
            </Radio>
        </Col>
    );
}

export default DropdownSelect;