# Multiplexer
- Slouží k přepínání jednoho z více vstupy k jeho výstupu

```vhdl
entity mux16_1 is
  Port ( a : in std_logic_vector(15 downto 0);
         s : in std_logic_vector(3 downto 0);
         y : out std_logic);
end mux16_1;

architecture Behavioral of mux16_1 is
  component mux4_1 is
    Port (a : in std_logic_vector(3 downto 0);
          s : in std_logic_vector(1 downto 0);
          y : out std_logic);
  end component mux4_1;

  SIGNAL m0,m1,m2,m3: std_logic;
  SIGNAL m : std_logic_vector(3 downto 0);
begin
  m <= m0&m1&m2&m3;
  mux1: mux4_1 port map(a=>a(3 downto 0),s=>s(1 downto 0),y=>m0);
  mux2: mux4_1 port map(a=>a(7 downto 4),s=>s(1 downto 0),y=>m1);
  mux3: mux4_1 port map(a=>a(11 downto 8),s=>s(1 downto 0),y=>m2);
  mux4: mux4_1 port map(a=>a(15 downto 12),s=>s(1 downto 0),y=>m3);
  mux5: mux4_1 port map(a=>m,s=>s(3 downto 2),y=>y);
end Behavioral;
```
