import React from "react";
import {shallow} from "enzyme";
import Registration from '../Registration';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe("Registration form", ()=>{
    it("should render correctly",() => {
        shallow(<Registration/>)
    });
    it("should be wrapped in registration container",() => {
        const component = shallow(<Registration/>);
        const wrapper = component.find('.Registration');
        expect(wrapper.length).toBe(1);
    });
});
