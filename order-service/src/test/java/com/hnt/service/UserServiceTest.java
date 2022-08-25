package com.hnt.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.hnt.UserRepository;
import com.hnt.entity.User;

class UserServiceTest {

	@Mock
	UserRepository repository;
	
	@InjectMocks
	UserService userService;
	
	
	@Test
	void testsave() {
		User user = new User();
		user.setId(1);
		when(repository.save(user)).thenReturn(user);
		userService.save(user);
		assertEquals(1, user.getId());
		
	 
	}
	
	@Test
	void saveforexception()
	{
		
		
	}

}
