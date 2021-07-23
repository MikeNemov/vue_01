import {mount} from "@vue/test-utils";
import TestComponent from "./TestComponent";

describe ('TestComponent', ()=>{
    test('Content of Test Component', ()=>{
        const wrapper = mount(TestComponent,{
            propsData: {
                message: 'Message test'
            }
        })
        expect(wrapper.text()).toEqual('This message is: Message test')
    })
})