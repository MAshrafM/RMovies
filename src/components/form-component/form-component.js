import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import { Button, FormGroup, FormControl, Row } from 'react-bootstrap';
import PlayIcon from '../../assets/icons/play-icon.svg';
import TvIcon from '../../assets/icons/tv-icon.svg';
import StarIcon from '../../assets/icons/star-icon.svg';
import FilterIconW from '../../assets/icons/filter-icon-w.svg';
import SearchIcon from '../../assets/icons/search-icon.svg'
import './form-component.css';
import RightArrow from '../../assets/icons/right-arrow-icon.svg';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { MapDispatchToProps } from '../../redux-reducer/mapping.js';

import DropdownSelect from './dropdown-select.js';

class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropDownHeight: 0,
            filterSelected: "movie",
            searchTextValue: "",
            searchHasError: false,
            loadVideElement: false,
        };

        this.initDropDownAnimation = this.initDropDownAnimation.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleRadioSelectChange = this.handleRadioSelectChange.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.makeApiRequest = this.makeApiRequest.bind(this);
    };

    initDropDownAnimation(event){
        this.setState(($prevState, $nowProps) => {
            return {
                dropDownHeight: "auto"
            }
        });
    }

    handleSearchChange(event){
        let thisTextValue = event.target.value;
        this.setState(($prevState, $nowProps) => {
            return {
                ...$prevState,
                searchTextValue: thisTextValue
            }
        });
    };

    handleRadioSelectChange(event){
        let thisSelected = event.target.value;
        this.setState(($prevState, $nowProps) => {
            return {
                filterSelected: thisSelected
            }
        });
    };

    makeApiRequest(queryText, searchType){
        let locQuery = "?qt=" + queryText + "&pn=1&st=" + searchType;
        this.props.history.push('/search-results' + locQuery);
    }

    formSubmitHandler(event){
        event.preventDefault();
        const { searchTextValue, filterSelected } = this.state;
        if(searchTextValue === ""){
            this.setState(($prevState, $nowProps) => {
                return{
                    searchHasError: true
                }
            });
        } else {
            this.setState(($prevState, $nowProps) => {
                return {
                    searchHasError: false
                }
            }, () => {
                this.makeApiRequest(searchTextValue, filterSelected);
            });
        }
    };

    render(){
        let formSetupObj = {
            dropDownHeight: this.state.dropDownHeight,
            dropDownAnimateEvent: this.initDropDownAnimation,
            dropDownRadioValue: [
                {value: "movie", imageUrl: PlayIcon, altText: "Movies", description: "Movies"},
                {value: "tv", imageUrl: TvIcon, altText: "TV Shows", description: "TV"},
                {value: "person", imageUrl: StarIcon, altText: "People/Celeb", description: "Person"}
            ],
            radioSelectedValue: this.state.filterSelected,
            radioChangeEvent: this.handleRadioSelectChange,
            inputChangeEvent: this.handleSearchChange,
            inputTextValue: this.state.searchTextValue,
            inputHasError: this.state.searchHasError,
            formSubmitEvent: this.formSubmitHandler
        },
        searchErrorClass = !formSetupObj.inputHasError ? "form__error-msg form__error-msg--hidden" : "form__error-msg";

        return (
            <form className="form search__form" onSubmit={formSetupObj.formSubmitEvent}>
                <FormGroup className="position__relative">
                    <FormControl className="search__form__input search__form__input--filter" value={formSetupObj.radioSelectedValue.split("-").join(" ")} disabled />
                    <span className="search__form__filter-icon" onClick={formSetupObj.dropDownAnimateEvent}>
                        <img src={FilterIconW} className="img-fluid" alt="filter" />
                    </span>
                    <span className="search__form__filter-pre-text">Filter By</span>
                </FormGroup>
                <AnimateHeight duration={500} height={formSetupObj.dropDownHeight}>
                    <div className="search__form__dropdown-filter-block">
                        <Row className="search__form__show-grid">
                            {
                                formSetupObj.dropDownRadioValue.map((element, index) => {
                                    return <DropdownSelect
                                            key={element.altText}
                                            buildProps={element}
                                            eventHandler={formSetupObj.radioChangeEvent}
                                            radioSelectedValue={formSetupObj.radioSelectedValue}
                                            />
                                })
                            }
                        </Row>
                    </div>
                </AnimateHeight>
                <FormGroup className="position__relative">
                    <FormControl placeholder="Example - The Matrix" className="search-form__input" value={formSetupObj.inputTextValue} onChange={formSetupObj.inputChangeEvent} />
                    <span className="search__form__search-icon">
                        <img src={SearchIcon} className="img-fluid" alt="Search" />
                    </span>
                    <div className={searchErrorClass}>Please Enter Your Search</div>
                </FormGroup>
                <Button className="search__form__btn" type="submit">
                    Search
                    <img src={RightArrow} className="img-fluid mx-auto" alt="search" title="Search" />
                </Button>
            </form>
        );
    }
};

export default withRouter(connect(null, MapDispatchToProps)(FormComponent));