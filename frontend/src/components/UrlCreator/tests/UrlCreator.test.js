import React from "react";
import {shallow} from "enzyme";
import UrlCreator from '../UrlCreator';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe("Short URL creator form", ()=>{
    it("should render correctly",() => {
        shallow(<UrlCreator/>)
    });
});