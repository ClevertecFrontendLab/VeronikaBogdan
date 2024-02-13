import { Card, Layout, Row } from 'antd';
import { CalendarTwoTone, IdcardOutlined, HeartFilled } from '@ant-design/icons';

import { CardAction } from './card';

import './content.scss';

const { Content } = Layout;

export const ContentPart: React.FC = () => (
    <Content>
        <Card className='card opportunities'>
            <p>С CleverFit ты сможешь:</p>
            <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
            <p>
                — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с
                нормами и рекордами;
            </p>
            <p>
                — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
                тренировках;
            </p>
            <p>
                — выполнять расписанные тренировки для разных частей тела, следуя подробным
                инструкциям и советам профессиональных тренеров.
            </p>
        </Card>
        <Card className='card motivation'>
            CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
            откладывай на завтра — начни тренироваться уже сегодня!
        </Card>
        <Row>
            <CardAction title='Расписать тренировки' icon={<HeartFilled />} label='Тренировки' />
            <CardAction title='Назначить календарь' icon={<CalendarTwoTone />} label='Календарь' />
            <CardAction title='Заполнить профиль' icon={<IdcardOutlined />} label='Профиль' />
        </Row>
    </Content>
);
