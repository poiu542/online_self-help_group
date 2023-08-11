package com.ssafy.cartel.domain.multipleChoiceType.entity;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MultipleChoiceType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="choice_id", updatable = false)
    private Integer id;

    @Column(name = "choice_content", nullable = false)
    private String content;


    @Builder
    public MultipleChoiceType(String content) {
        this.content = content;
    }
}
