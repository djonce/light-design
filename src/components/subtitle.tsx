import React from 'react';
/*
  subtitle:组件示例title 
  subNotes:组件示例备注名
  subDesc:组件示例描述
*/
export type TitleProps = {
  subtitle: string;
  subNotes?: string;
  subDesc?: JSX.Element | string;
};
export default function SubTitle(props: TitleProps): JSX.Element {
  const { subtitle, subNotes, subDesc } = props;
  return (
    <div>
      <h2 className="packagesSubTitle">
        {subtitle}
        <span>{subNotes}</span>{' '}
      </h2>
      <p className="packagesSubDesc">{subDesc}</p>
    </div>
  );
}
SubTitle.defaultProps = {
  subNotes: '',
  subDesc: '',
};
