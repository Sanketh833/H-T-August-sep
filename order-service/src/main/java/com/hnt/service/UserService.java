package com.hnt.service;

import java.nio.channels.IllegalChannelGroupException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hnt.UserRepository;
import com.hnt.entity.User;

@Service
public class UserService {
	@Autowired
	UserRepository repository;

	public User save(User user) {
		if (user.getName().equals("Ram"))
			throw new IllegalArgumentException("message");
		else

			return repository.save(user);
	}

	public Iterable<User> getUser() {
		return repository.findAll();
	}

	public void deleteuser(int id) {

		 repository.deleteById(id);

		}

}
