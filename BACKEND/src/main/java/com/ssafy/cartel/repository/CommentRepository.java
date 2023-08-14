package com.ssafy.cartel.repository;

import com.ssafy.cartel.domain.Article;
import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findAllByArticle(Article article);
    List<Comment> findAllByUser(User user);
}

