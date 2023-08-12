package com.ssafy.cartel.domain.comment.dto;

import com.ssafy.cartel.domain.article.entity.Article;
import com.ssafy.cartel.domain.comment.entity.Comment;
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CommentDto {

    private String content;
    private LocalDateTime date;
    private Integer state;
    private Article postId;
    private User userId;

    public Comment toEntity() {
        return Comment.builder()
                .content(content)
                .date(date)
                .state(state)
                .user(userId)
                .build();
    }
}
