/* global describe, it, expect, jest */
import confirm from '../src/index';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

jest.mock('react-dom');

describe('confirm function', () => {
    let mocked = ReactDOM.render.mockImplementation(shallow);

    it('renders the modal on calling', () => {
        confirm();

        expect(mocked).toHaveBeenCalled();
    });
});
