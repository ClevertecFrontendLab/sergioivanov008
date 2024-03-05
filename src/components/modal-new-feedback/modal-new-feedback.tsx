import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Button, Form, Modal, Rate } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';
import { MODAL_FEEDBACKS } from '@constants/constants';
import TextArea from 'antd/lib/input/TextArea';
import { getModalWidth } from '@utils/utils';

export const ModalNewFeedback: React.FC = () => {
    const dispatch = useAppDispatch()
    const showModalNewFeedback = useAppSelector(state => state.feedbacks.showModalNewFeedback);
    const newFeedbackRating = useAppSelector(state => state.feedbacks.newFeedbackRating);
    const newFeedbackMessage = useAppSelector(state => state.feedbacks.newFeedbackMessage);

    const [isCanSubmit, setIsCanSubmit ] = useState(false);

    const modalWidth = getModalWidth(document.documentElement.clientWidth);

    useEffect(() => {
        if (newFeedbackRating > 0) {
            setIsCanSubmit(true);
        } else {
            setIsCanSubmit(false);
        }
    }, [newFeedbackRating]);

    const handleCancelModal = () => {
        dispatch(feedbacksActions.setShowModalNewFeedback(false));
    }

    const handleOk = () => {
        handleCancelModal();
        dispatch(feedbacksActions.startNewFeedbackPost({
            newFeedbackPost: {message: newFeedbackMessage, rating: newFeedbackRating}
        }));
    }

    const handleSetNewFeedbackRating = (value: number) => {
        dispatch(feedbacksActions.setNewFeedbackRating(value));
    }

    const handleSetNewFeedbackMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(feedbacksActions.setNewFeedbackMessage((e.target.value).toString()));
    }

    return (
        <Modal
            open={showModalNewFeedback}
            onCancel={handleCancelModal}
            centered
            title={MODAL_FEEDBACKS.NEW_FEEDBACK_TITLE}
            width={modalWidth}

            maskStyle={{ backgroundColor: 'rgba(121, 156, 213, 0.5)', backdropFilter: 'blur(5px)' }}
            footer={[
                <Button
                    key="submit"
                    type="primary"
                    disabled={!isCanSubmit}
                    onClick={handleOk}
                    data-test-id='new-review-submit-button'
                >
                    {MODAL_FEEDBACKS.NEW_FEEDBACK_BTN}
                </Button>,
            ]}
        >
            <Form>
                <Form.Item
                    name={'rating'}
                    rules={[{required: true}]}
                >
                    <Rate
                        allowHalf={false}
                        onChange={handleSetNewFeedbackRating}
                        character={
                            ({ index }) => index !== undefined && index + 1 <= newFeedbackRating
                                ? <StarFilled style={{ color: 'var(--character-light-warning)', fontSize: '24px' }} />
                                : <StarOutlined style={{ color: 'var(--character-light-warning)', fontSize: '24px' }} />
                        }
                        value={newFeedbackRating}
                    />
                </Form.Item>
                <Form.Item name={'message'}>
                    <TextArea
                        placeholder={MODAL_FEEDBACKS.INPUT_PLACEHOLDER}
                        style={{ minHeight: 46 }}
                        value={newFeedbackMessage}
                        onChange={handleSetNewFeedbackMessage}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};
