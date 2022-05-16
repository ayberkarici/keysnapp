import React from "react";

const ProfilePage = () => {
    return (
        <div className="section-layout">
            <div className="profile-section">
                <div className="user-sidebox">
                    <a href="/">
                        <div className="user-sidebox-item">Anasayfa</div>
                    </a>
                    <a href="/active-homeworks">
                        <div className="user-sidebox-item">Sorularım</div>
                    </a>
                    <a href="/math-engine">
                        <div className="user-sidebox-item">Math Engine</div>
                    </a>
                    <a href="/settings">
                        <div className="user-sidebox-item">Ayarlar</div>
                    </a>
                </div>
                <div className="user-flow">
                    <div className="user-info-box">
                        <div className="profile-photo">[IMG]</div>
                        <div className="user-info">
                            <div className="user-name">Ayberk Arıcı</div>
                            <div className="user-description">
                                <span>Marmara Üniversitesi</span>,{" "}
                                <span>Endüstri Mühendisliği</span>{" "}
                                <span>•</span> <span>2</span>. Sınıf
                            </div>
                        </div>
                    </div>
                    <div className="posts">
                        <div className="post">
                            <div className="post-header">
                                <div className="post-icon">≅</div>
                                <div className="post-context">Fizik 2</div>
                            </div>
                            <div className="post-content">
                                Fizik ödevinin süresinin dolmasına son 2 gün
                                kaldı! Linke tıkla ve 100 al!
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-header">
                                <div className="post-icon">≅</div>
                                <div className="post-context"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
