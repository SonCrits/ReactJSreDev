import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function PropOverStaffDel ({staff, id , fetchDelStaffs}) {
    if(id === undefined) {
        id = '';
    }

    const [isOpen, setIsOpen] = useState(false);
    return(
        <React.Fragment>
            <Button
                id={'buttonDel' + id}
                type='button'
                onClick={() => setIsOpen(!isOpen)}
                className='btn-danger flex-fill'
                title='Xóa nhân viên'
            >
                <span className='fa fa-times fa-md text-white'></span>
            </Button>
            <Popover flip isOpen={isOpen} placement='bottom' target={'buttonDel' + id} toggle={() => setIsOpen(!isOpen)}>
                <PopoverHeader>Bạn muốn xóa</PopoverHeader>
                <PopoverBody>
                    {staff.name} <hr />
                    <Button className='btn-danger flex-fill' onClick={() => {fetchDelStaffs(id)}}>
                        Xác nhận Xóa
                    </Button>
                </PopoverBody>
            </Popover>
        </React.Fragment>
    )
}

export default PropOverStaffDel;