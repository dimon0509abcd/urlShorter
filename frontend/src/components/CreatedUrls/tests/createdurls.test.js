import React from "react";
import {shallow} from "enzyme";
import CreatedUrls from '../CreatedUrls';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe("Created urls form", ()=>{
    it("should render correctly",() => {
        shallow(<created-urls/>)
    });
});