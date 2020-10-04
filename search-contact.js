function search (input,name)
{
	var array = [

		{
			key: 2 ,
			chars: ["a", "b", "c"]
		},
		{
			key: 3 ,
			chars: ["d", "e", "f"]
		},
		{
			key: 4 ,
			chars: ["g", "h", "i"]
		},
		{
			key: 5 ,
			chars: ["j", "k", "l"]
		},
		{
			key: 6 ,
			chars: ["m", "n", "o"]
		},
		{
			key: 7 ,
			chars: ["p", "q", "r", "s"]
		},
		{
			key: 8 ,
			chars: ["t", "u", "v"]
		},
		{
			key: 9 ,
			chars: ["w", "x", "y", "z"]
		}

	];

	var valid = 0;

	for(var i = 0; i < input.length; i++)
	{
		for(var j = 0; j < array.length; j++)
		{
			if(input[i] == array[j].key)
			{
				if(array[j].chars.includes(name[i]))
				{
					valid++;
				}
			}
		}

	}

	return valid == input.length;

}

console.log(search("277", "assis"));