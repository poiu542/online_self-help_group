package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.*;
import com.ssafy.cartel.service.CounselorService;
import com.ssafy.cartel.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Controller
public class CounselorController {

    private UserService userService;
    private CounselorService counselorService;

    @PostMapping("/signup/counselor")
    public ResponseEntity<String> signupCounselor(@RequestBody UserDto user, @RequestBody CounselorDto counselor, @RequestBody CareerDto CareerDto){
        userService.save(user);
        counselorService.save(counselor);

        return ResponseEntity.ok("상담사 회원가입 완료");

    }

    @PutMapping("/userinfo/counselor/{id}") // 상담사 id
    public ResponseEntity<String> updateCounselor(@PathVariable Integer id,@RequestBody UpdateUserRequest userRequest, @RequestBody UpdateCounselorRequest counselorRequest){
        Counselor counselor = counselorService.findById(id);
        Integer userId = counselor.getUser().getId();
        userService.update(userId, userRequest);
        counselorService.update(id,counselorRequest);

        return ResponseEntity.ok().body("상담사 정보 수정 완료");
    }


    @GetMapping("/userinfo/counselor/{id}") //상담사 아이디
    public ResponseEntity<Map<String, Object>> userInfo(@PathVariable Integer id){
        Counselor counselor = counselorService.findById(id);
        Integer userId = counselor.getUser().getId();
        User user = userService.findbyId(userId);

        Map<String,Object> userInfo= new HashMap<>();
        userInfo.put("user", user);
        userInfo.put("counselor", counselor);

        return ResponseEntity.ok().body(userInfo);
    }





}
