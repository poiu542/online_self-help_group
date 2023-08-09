package com.ssafy.cartel.curriculum.dto;

import com.ssafy.cartel.counsel.entity.Counsel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CurriculumDto {

    private Integer title;
    private String content;
    private Counsel counselId;

}
