import React from "react";
import {shallow} from "enzyme";
import LoginForm from '../LoginForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe("LogIn form", ()=>{
    it("should render correctly",() => {
        shallow(<LoginForm/>)
    });
});