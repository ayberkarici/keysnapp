import React from "react";
import ContentLoader from "react-content-loader";

const QuestionSkeleton = (props) => {
    return (
        <ContentLoader
            speed={1.32}
            height={500}
            viewBox="0 0 500 400"
            backgroundColor="#c7c7c7"
            foregroundColor="#adadad"
            {...props}
        >
            <rect x="84" y="28" rx="3" ry="3" width="88" height="6" />
            <rect x="84" y="46" rx="3" ry="3" width="52" height="6" />
            <rect x="16" y="120" rx="3" ry="3" width="410" height="8" />
            <rect x="16" y="140" rx="3" ry="3" width="380" height="8" />
            <rect x="16" y="160" rx="3" ry="3" width="178" height="8" />
            <circle cx="42" cy="42" r="30" />
            <rect x="16" y="190" rx="3" ry="3" width="380" height="8" />
            <rect x="16" y="210" rx="3" ry="3" width="357" height="8" />
        </ContentLoader>
    );
};

export default QuestionSkeleton;
