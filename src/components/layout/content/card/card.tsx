import { Card, Col } from 'antd';
import { ReactElement } from 'react';

import './card.scss';

type CardActionProps = { title: string; icon: ReactElement; label: string };

export const CardAction: React.FC<CardActionProps> = ({ title, icon, label }: CardActionProps) => (
    <Col>
        <Card title={title}>
            {icon} {label}
        </Card>
    </Col>
);
