import Confirm from './Confirm';

export default function confirm(options = {}) {
    const instance = new Confirm(options);

    return instance.open();
}
