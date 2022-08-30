package com.hnt.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.mockitoSession;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.hnt.entity.User;
import com.hnt.service.UserService;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

	@Mock
	UserService userservice;

	@InjectMocks
	UserController usercontroller;

	@Test
	void testsaveUser() {

		User user = new User();
		user.setId(1);
		when(userservice.save(user)).thenReturn(user);
//		Integer savedUserId = usercontroller.saveUser1(user);
//		assertEquals(1, savedUserId);
	}

		
	

}
