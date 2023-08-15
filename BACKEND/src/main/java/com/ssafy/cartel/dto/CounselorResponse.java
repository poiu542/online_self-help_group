package com.ssafy.cartel.dto;

import com.ssafy.cartel.domain.Counselor;
import lombok.Getter;

@Getter
public class CounselorResponse {

    private final Integer counselorId;
    private final Integer userId;
    private final String name;
    private final String profile;
    private final String regist;
    private final String license;
    private final String school;
    private final String company;
    private final String introduction;
    private final Integer rateSum;
    private final Integer state;




    public CounselorResponse(Counselor counselor, Integer userId , String name, String profile) {
        this.counselorId = counselor.getId();
        this.company = counselor.getCompany();
        this.introduction = counselor.getIntroduction();
        this.rateSum = counselor.getRateSum();
        this.school = counselor.getSchool();
        this.license = counselor.getLicense();
        this.regist = counselor.getRegist();
        this.state = counselor.getState();
        this.userId = userId;
        this.name = name;
        this.profile = profile;

    }
}

